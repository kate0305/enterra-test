import { MAX_USER_RATING } from '@/utils/consts';

export const getArrForRenderRating = (rating) => {
  const arrOfColoredStars = Array.from({ length: Math.round(rating) }, (_, i) => ({
    id: i,
    isColored: true,
  }));
  const arrOfNotColoredStars = Array.from(
    { length: MAX_USER_RATING - arrOfColoredStars.length },
    (_, i) => ({ id: arrOfColoredStars.length + i, isColored: false })
  );
  const starsArr = [...arrOfColoredStars, ...arrOfNotColoredStars];
  return starsArr;
};
