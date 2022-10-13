import { ChangeEvent, Fragment, useState } from 'react';

const RATING_VALUES = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type ReviewPost = {
  rating: number;
  comment: string;
}

function AddReviewForm(): JSX.Element {
  const [review, setReview] = useState<ReviewPost>({
    rating: 0,
    comment: '',
  });

  const handleTextChange = ({ target } : ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      ...review,
      comment: target.value,
    });
  };

  const handleStarsCountChange = ({ target } : ChangeEvent<HTMLInputElement>) => {
    setReview({
      ...review,
      rating: Number(target.value),
    });
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATING_VALUES.map((value: number): JSX.Element => (
            <Fragment key={value}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                onChange={handleStarsCountChange}
                checked={value === review.rating}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          onChange={handleTextChange}
          placeholder="Review text"

        >
          {review.comment}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
