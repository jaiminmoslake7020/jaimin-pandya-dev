import React from 'react';

export type ExperienceBoxPropTypes = {
    companyName: string,
    location: string,
    duration: string,
    jobTitle: string,
    companyLogo: string,
    companyLink: string,
    companyLogoAppearance: string
};

export type ExperienceBoxEmptyPropTypes = {
    setShowMore: Function,
    showMore: boolean,
};

export const ExperienceBoxEmpty = (props: ExperienceBoxEmptyPropTypes) => {
    const {
        setShowMore, showMore
    } = props;
    return (
        <div className={"experience-box-wrapper"}>
            <div className={"experience-box empty-box "}>
                <button type={"button"} onClick={() => {
                    setShowMore(!showMore);
                }}>{showMore ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    );
}

const ExperienceBox = (props: ExperienceBoxPropTypes) => {
    const {
        companyName,
        location,
        duration,
        jobTitle,
        companyLogo,
        companyLink,
        companyLogoAppearance
    } = props;
    return (
        <div className={"experience-box-wrapper group  "}>
            <div className={"experience-box lg:group-hover:before:animate-[shimmer_1s_forwards] "}>
                <div className={"job-title"}>
                    <h4>{jobTitle}</h4>
                </div>
                <div className={"duration"}>
                    <p>{duration}</p>
                </div>
                <div className={"companyName"}>
                    <p>{companyName} - {location}</p>
                </div>
                <div className={`company-logo ${companyLogoAppearance} `}>
                    <a rel="noreferrer" href={companyLink} target={"_blank"} >
                        <img src={companyLogo}  alt={companyName} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ExperienceBox;
