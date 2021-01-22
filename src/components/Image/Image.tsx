import React, { useState, useEffect } from 'react';

interface ImageProps {
    filename: string,
    classes?: string,
    imageClicked?: () => void
}

const Image = ({filename, classes, imageClicked}: ImageProps) => {
    const [imageSource, setImageSource] = useState(undefined);

    /**
     * Dynamically imports the desired image.
     * Sets the path to the image on success, undefined on error.
     * @param filename Image's filename
     */
    const getImage = (filename: string): void => {
        import(`../../assets/images/${filename}`)
            .then(res => setImageSource(res.default))
            .catch(() => setImageSource(undefined));
    };

    useEffect(() => getImage(filename), []);

    return (
        <img
            src={imageSource}
            alt={filename}
            className={classes}
            onClick={imageClicked}
        />
    );
};

export default Image;