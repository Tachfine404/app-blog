import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  CardMedia,
} from '@mui/material';
import { format } from 'date-fns';
import getImageUrl from '../utils/imageUrl';

const PostCard = ({ post }) => {
  return (
    <Card sx={{ mb: 3, overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        {post.image && (
          <CardMedia
            component="img"
            sx={{ width: 300, height: 300, objectFit: 'cover' }}
            image={getImageUrl(post.image)}
            alt={post.title}
          />
        )}
        <CardContent sx={{ flex: '1 1 auto', p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar 
              src={post.author?.profilePicture ? getImageUrl(post.author.profilePicture) : null}
              sx={{ width: 40, height: 40, mr: 2 }}
            >
              {post.author?.username ? post.author.username[0] : '?'}
            </Avatar>
            <Box>
              <Typography variant="subtitle2">
                {post.author?.username || 'Unknown'}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {format(new Date(post.createdAt), 'dd/MM/yyyy')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h5" component={Link} to={`/posts/${post._id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
            {post.title}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{
              mt: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.content}
          </Typography>
          {post.category && (
            <Button 
              variant="contained" 
              size="small" 
              sx={{ mt: 2, textTransform: 'none' }}
              component={Link}
              to={`/category/${post.category._id}`}
            >
              {post.category.title}
            </Button>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default PostCard;
