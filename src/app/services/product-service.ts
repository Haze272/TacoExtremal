export class Product {
    name: string;
    description: string;
    price: number;
    weight: number;
    imgUrl: string;

    constructor(
        _name: string,
        _description: string,
        _price: number,
        _weight: number,
        _imgUrl: string
    ) {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.weight = _weight;
        this.imgUrl = _imgUrl;
    }
}

export class ProductService {
    private products: Product[] = [];

    public getProducts(): Product[] {
        return this.products;
    }

    public makeMockProducts() {
        this.products = [
            {
                'name': 'Биф кесадия',
                'description': 'Великолепное блюдо, состоящее из тапы, фарша, овощей и главное - сыра!',
                'price': 519,
                'weight': 400,
                'imgUrl': 'https://i.imgur.com/gsyYw6n.jpg'
            },
            {
                'name': 'Тако де сердо',
                'description': 'Тако с острым свиными мясом в хрустящей тапе!',
                'price': 379,
                'weight': 260,
                'imgUrl': 'https://i.imgur.com/rCShMfJ.jpg'
            },
            {
                'name': 'Чикен буррито',
                'description': 'Мексиканская вселенная из вкусов в привычной форме!',
                'price': 449,
                'weight': 340,
                'imgUrl': 'https://i.imgur.com/5oHLjjW.jpg'
            },
            {
                'name': 'Чикен кесадия',
                'description': 'Великолепное блюдо, состоящее из тапы, куриного мяса, овощей и главное - сыра!',
                'price': 489,
                'weight': 400,
                'imgUrl': 'https://i.imgur.com/SfwU2zq.jpg'
            },
            {
                'name': 'Чикен тако',
                'description': 'Нежно обжаренное куриное мясо с овощами и соусом гуакамоле, завернутое в хрустящую тапу',
                'price': 359,
                'weight': 250,
                'imgUrl': 'https://i.imgur.com/Sfy4o05.jpg'
            },
            {
                'name': 'Тако криспи',
                'description': 'Классическое тако, дополненная салатом "романо" и сыром чеддер',
                'price': 389,
                'weight': 250,
                'imgUrl': 'https://i.imgur.com/7SxgaYJ.jpg'
            },
            {
                'name': 'Биф буррито',
                'description': 'Великолепное блюдо, состоящее из тапы, фарша, овощей и главное - сыра!',
                'price': 519,
                'weight': 360,
                'imgUrl': 'https://i.imgur.com/V1vpQdd.jpg'
            },
            {
                'name': 'Тако добле',
                'description': 'Двойная тапа, чили, фасолевая паста - больше фарша, больше вкуса!',
                'price': 489,
                'weight': 300,
                'imgUrl': 'https://i.imgur.com/9Eoa67Z.jpg'
            },
            {
                'name': 'Тако суаве',
                'description': 'Мраморная гоавядина, салат романо, прекрасный соус!',
                'price': 379,
                'weight': 185,
                'imgUrl': 'https://i.imgur.com/vHOIMc2.jpg'
            },
        ]
    }
}

