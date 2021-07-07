import React, {useEffect, useState} from 'react';
import {RatingProps} from "./Rating.props";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cn from "classnames";
import styles from './Rating.module.css';
import StarIcon from './star.svg'

const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i < currentRating
                })}/>
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};

export default Rating;