import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
export const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false);

    for (let i = 0; i < rating; i++){
        ratingArray[i] = true;
    }

  return (
		<>
			{ratingArray.map((value, index) =>
				value ? (
					<i
						key={index}
						className="text-lg  text-yellow-500 mr-1"
					>
						<StarIcon />
					</i>
				) : (
					<i
						key={index}
						className="text-lg  text-yellow-500 mr-1"
					>
						<StarOutlineIcon />
					</i>
				)
			)}
		</>
	);
}
