import { Box, Skeleton, Typography } from '@mui/material';
import style from './style.module.scss';
export function Fnd() {
  const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396k views',
      createdAt: 'a week ago',
    },
    {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      title: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40M views',
      createdAt: '3 years ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    }
  ];
  const box_width = '30%';
  const img_width = '100%';
  const img_height = '200px';
    return (
          <div className={style.fnd}>

            {data.map((item, index) => (
            <Box key={index} sx={{width: box_width,m:1}}>
              <img
                style={{ width: img_width, height: img_height }}
                alt={item.title}
                src={item.src}
              />
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            </Box>
            ))}

            <Box sx={{ width: box_width,m: 1 }}>
              <Skeleton variant="rectangular" animation="wave" width={img_width} height={img_height} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width="60%" />
              <Skeleton animation="wave" width="80%" />
            </Box>

            <Box sx={{ width: box_width,m: 1 }}>
              <Skeleton variant="rectangular" animation="wave" width={img_width} height={img_height} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width="60%" />
              <Skeleton animation="wave" width="80%" />
            </Box>
            
            <Box sx={{ width: box_width,m: 1 }}>
              <Skeleton variant="rectangular" animation="wave" width={img_width} height={img_height} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width="60%" />
              <Skeleton animation="wave" width="80%" />
            </Box>


          </div>
    );
}