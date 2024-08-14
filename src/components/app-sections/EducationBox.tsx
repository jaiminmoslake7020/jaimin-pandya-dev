import React from 'react';

export type EducationBoxPropTypes = {
    degreeName: string,
    collageName: string,
    duration: string,
    location: string,
    collageLogo: string,
    LogoAppearance: string,
    collageLink: string
};

const EducationBox = (props: EducationBoxPropTypes) => {
    const {
        degreeName,
        collageName,
        duration,
        location,
        collageLogo,
        LogoAppearance,
        collageLink
    } = props;
    return (
        <div className={"education-box-wrapper group  "}>
            <div className={"education-box "}>
                <div className={"degree-name"}>
                    <h4>{degreeName}</h4>
                </div>
                <div className={"collage-name"}>
                    <p>{collageName}</p>
                </div>
                <div className={"location"}>
                    <p>{location}</p>
                </div>
                <div className={"duration"}>
                    <p>{duration}</p>
                </div>
                <div className={`collage-logo ${LogoAppearance} `}>
                    <a rel="noreferrer" href={collageLink} target={"_blank"} >
                        <img src={collageLogo}  alt={degreeName} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EducationBox;
