import { Card, CardContent, CardMedia, Typography, Button, CardActions, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props{
  product: Product;
}

export default function ProductCard({product}: Props){
  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  return(
    <Card>
      <CardHeader
        title ={product.name}
        titleTypographyProps={{
          sx: {fontSize: 18, fontWeight: '500', color: 'purple', p: 3}
        }}

      />
      <CardMedia
        sx={{ height: 150, width: 300, backgroundSize: 'contain', bgcolor: 'common.white' }}
        image={product.pictureUrl} 
        title={product.name}
      />

      <CardContent>
        <Typography gutterBottom color='purple' variant="h5" >
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="purple">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>

      <CardActions>
        <LoadingButton 
          loading={status.includes('pendingAddItem'+ product.id)} 
          onClick={() => dispatch(addBasketItemAsync({productId: product.id}))} 
          size="small">Add to cart</LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}