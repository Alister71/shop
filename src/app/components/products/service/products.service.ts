import {Injectable} from '@angular/core';
import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../model/product';
import {from, Observable} from 'rxjs';

const productArray =  [
  new Product(1, 'Lipton Iced Tea',
    'Lipton Iced Southern Sweet Tea K-Cup Pods make a rich, aromatic cup of sweet iced tea you can enjoy anytime. This iced black tea is a classic, made from 100% real tea leaves, carefully selected and fresh-pressed to capture as much real tea-leaf taste as possible. A Lipton Iced Tea K-Cup is the most convenient way to enjoy the perfect cup of iced tea. Sip and let the refreshing taste of Lipton Iced Tea brighten your day!',
    26.35,
    CategoryEnum.FOOD,
    true,
    'https://m.media-amazon.com/images/I/81-PUDQUGdL._SX679_.jpg'),
  new Product(2, 'Pringles Potato Crisps Chips',
    'What comes after opening this pack of portable Pringles Snack Stacks? The crisp, tantalizing taste of potato and choice of six enticing flavors. Includes 27, 0.67- or 0.74-ounce handheld, single-serve cups of ingeniously shaped Pringles Potato Crisps in Original, Sour Cream and Onion, Cheddar Cheese, BBQ, Pizza, Cheddar and Sour Cream. Insanely light, crispy, and never greasy, each flavor is uniquely delicious. Convenient, individual size cups let you create snacking moments whenever, wherever; Grab a cup as a pick-me-up for after school or pack into lunch boxes. Bring cups for game time plus some for other Pringles fans. Stash cups in your work desk, stock up your pantry or take your favorite flavors in the car to enjoy anytime. Share Pringles at your next get-together to turn up excitement among family and friends. Get your hands on this Pringles Snack Stacks Potato Crisps Variety Pack for irresistible flavor options that keep you coming back, stack after stack.',
    20,
    CategoryEnum.FOOD,
    true,
    'https://m.media-amazon.com/images/I/81CIge4tiwL._SX679_.jpg'),
  new Product(3, 'QUAKER Instant Oatmeal',
    'If you\'re into Certified Organic foods, look no further than Quaker Organic Oatmeal. With the simple wholesomeness you\'ve come to expect from Quaker, our Certified Organic Oats are a perfect complement to your favorite organic fruit and nut toppings.',
    28.56,
    CategoryEnum.FOOD,
    true,
    'https://m.media-amazon.com/images/I/91kuB88h5-L._SX679_.jpg'),
  new Product(5, 'Killers Amidst Killers: Hunting Serial Killers Operating Under the Cloak of America\'s Opioid Epidemic',
    'Bestselling author, co-host of the hit podcast and Discovery + docuseries Unraveled: Long Island Serial Killer, and true-crime investigative journalist Billy Jensen goes to Columbus, Ohio, where he examines the unsolved cases of eighteen dead and missing women, whom he suspects were the victims of serial killers on the loose and operating under cover of the opioid epidemic in America\'s heartland.',
    15.74,
    CategoryEnum.BOOKS,
    false,
    'https://m.media-amazon.com/images/I/51wTg6KP0UL.jpg'),
  new Product(6, 'Trailed: One Woman\'s Quest to Solve the Shenandoah Murders',
    'A beautifully written account of a great American tragedy—the unsolved murders of an undetermined number of young women, all by the same serial killer, who got away. The truth is still buried. I couldn’t put it down.',
    14.46,
    CategoryEnum.BOOKS,
    true,
    'https://m.media-amazon.com/images/I/51Qz+D0c-vL.jpg'),
  new Product(7, 'The Girl I Never Knew: Who Killed Melissa Witt?',
    'LaDonna Humphrey restores my faith in all of humanity. The Girl I Never Knew is a painstaking labor of love, masterfully woven together to create a riveting page-turner that describes her hunt for a killer and the traction she is gaining to solve this cold case.',
    6.29,
    CategoryEnum.BOOKS,
    true,
    'https://m.media-amazon.com/images/I/41T3RzB+8HL.jpg'),
  new Product(9, 'Moto G Stylus',
    'Unlocked for the freedom to choose your carrier. Compatible with AT&T, Sprint, T-Mobile, and Verizon networks. Sim card not included. Customers may need to contact Sprint for activation on Sprint’s network.',
    199.99, CategoryEnum.ELECTRONICS, true,
    'https://m.media-amazon.com/images/I/71Nc7ctBTIL._AC_SX466_.jpg'),
  new Product(10, 'TCL 20 SE 6.82',
    'Fast and Smooth Performance: Feel instant response time thanks to the Qualcomm Octa-Core processor. Compatible with the T-Mobile and AT&T LTE networks.networks.(This device would support the new AT&T network next year) TCL 20 SE unlocked cell phone is currently not certified for use on Verizon. Not compatible with any CDMA networks.(such as Verizon, Sprint, Spectrum, Xfinity,etc.)This Model is made for the US with a one-year US warranty.',
    189.99, CategoryEnum.ELECTRONICS, true,
    'https://m.media-amazon.com/images/I/61vGqZ1RVbS._AC_SX679_.jpg'),
  new Product(11, 'Nokia G50 5G',
    'Latest Qualcomm Snapdragon 480 5G Mobile Platform\n' +
    '48MP camera setup with AI and video selfie stabilization\n' +
    'Android 11\n' +
    '3 years of monthly security updates and 2 years of OS upgrades\n' +
    'This Android 5G smartphone lets you choose or change carriers and data plans; compatible with GSM carriers including T-Mobile, Cricket, and AT&T (AT&T 4G only, AT&T 5G not supported)',
    299.99, CategoryEnum.ELECTRONICS, true,
    'https://m.media-amazon.com/images/I/51vf1R1wS9L._AC_SX679_.jpg')
];

const productArrayPromise = Promise.resolve(productArray);

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Promise<Product[]> {
    return productArrayPromise;
  }

  getProduct(id: NonNullable<Product['id']> | string ): Promise<Product | undefined> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  getProductObs(id: NonNullable<Product['id']> | string ): Observable<Product | undefined> {
    return from(this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method')));
  }

  createProduct(product: Product): void {
    productArray.push(product);
  }
  updateProduct(product: Product): void {
    const i = productArray.findIndex(t => t.id === product.id);
    if (i > -1) {
      productArray.splice(i, 1, product);
    }
  }
  deleteProduct(product: Product): void {
    const i = productArray.findIndex(t => t.id === product.id);
    if (i > -1) {
      productArray.splice(i, 1);
    }
  }
}
