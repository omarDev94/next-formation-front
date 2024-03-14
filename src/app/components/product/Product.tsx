import {Product as ProductInterface} from '@/app/lib/types'
import Link from 'next/link';

// un component enfant: doesnt take automatically the type from the parent: i need to redefine it.
type Props = {
    product: ProductInterface
}

function Product( { product } : Props ) {
    const urlProduct = `/admin/${product.id}`

    return ( 
        <li>
            <Link href={urlProduct}>{product.title}</Link>
        </li>
     );
}

export default Product;