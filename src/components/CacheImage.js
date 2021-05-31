
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';





const CacheImage = (props) => {

    const [source, setSource] = useState(null)

    const toDataURL = async (url) => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))

    const cachingImage = async () => {

        try {
            const { uri } = props.source;
            const name = shorthash.unique(uri);
            const path = `${FileSystem.cacheDirectory}${name}`;
            const image = await FileSystem.getInfoAsync(path);


            const downloadNewImage = async () => {
                console.log('saving image to cache');
                const newImage = await FileSystem.downloadAsync(uri, path);
                setSource({ uri: newImage.uri + "?" + new Date() });


            }


            if (image.exists) {
                console.log('read image from cache');
                setSource({ uri: image.uri + "?" + new Date() });



                toDataURL(uri)
                    .then(dataUrl => {
                        toDataURL(image.uri)
                            .then(dataUri => {

                                if (dataUri === dataUrl) {
                                    console.log("The image are same")
                                    return;
                                }
                                else {
                                    console.log("Image has changed from original url")
                                    downloadNewImage()
                                }

                            })
                    }).catch((err) => {
                        console.log(err.message)
                    })

            }
            else {

                try {

                    fetch(uri)
                        .then(response => {
                            if (response.status === 200) {
                                downloadNewImage()
                            }
                        })
                }
                catch (err) {
                    console.log(err.message)
                }
            }

        } catch (err) {
            setSource(props.source)

        }

    }



    useEffect(() => {
        cachingImage()
    }, [props.source.uri])

    return <Image style={props.style} source={source} {...props} />

}

export default CacheImage;