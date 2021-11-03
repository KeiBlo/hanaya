const products = [
  {
    name: 'ROSEBUD',
    image:
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3800,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'GLAZE',
    image: 'https://dl.dropboxusercontent.com/s/lxcnm8toxj87lk5/glaze.jpg?dl=0',
    additionalInfo: 'FREE UPGRADE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'birthday',
    price: 3700,
    countInStock: 2,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'BLUEBELLE',
    image:
      'https://dl.dropboxusercontent.com/s/lacp42dvp08cle8/rosebud.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],

    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'birthday',
    price: 3600,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },

  {
    name: 'GODDNESS',
    image:
      'https://dl.dropboxusercontent.com/s/uccw1m0pk22jzrm/dsc_2498.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Bring the garden inside with this heavenly bouquet of sweet avalanche roses, antique carnations, delicate alstroemeria & soft pink sugar flair hypericum berries.',
    category: 'birthday',
    price: 3900,
    countInStock: 2,
    rating: 2.5,
    numReviews: 2,
  },
  {
    name: 'ECUADOREAN ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/at7ai9ahq1xkse0/dsc_2515.jpg?dl=0dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'birthday',
    price: 3800,
    countInStock: 1,
    rating: 3.5,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX 12 RED ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/m6gkfb0hk60p4e7/letterbox_12_1.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3860,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX FRANGIPAN',
    image:
      'https://dl.dropboxusercontent.com/s/a54k41dkkymxr99/frangipannew.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3300,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX WHITE ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/iq9tszbe621rfce/letterbox_flowers_-_white_roses_-_flowers_by_post.png?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'birthday',
    price: 3250,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'PROMEGRANATE ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/lacp42dvp08cle8/rosebud.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'The first bouquet is a stunning arrangement of pure white fragrant oriental lilies with vibrant yellow roses, sugar flair hypericum berries and alluring lilac memory lane roses..',
    category: 'birthday',
    price: 3890,
    countInStock: 6,
    rating: 5,
    numReviews: 7,
  },
  {
    name: '50 ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/0vnqt39klwhvrd3/50_red_roses.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'birthday',
    price: 3200,
    countInStock: 4,
    rating: 3.5,
    numReviews: 5,
  },
  {
    name: 'LETTERBOX 12 RED ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/m6gkfb0hk60p4e7/letterbox_12_1.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3860,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX FRANGIPAN',
    image:
      'https://dl.dropboxusercontent.com/s/a54k41dkkymxr99/frangipannew.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3300,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX WHITE ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/iq9tszbe621rfce/letterbox_flowers_-_white_roses_-_flowers_by_post.png?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'birthday',
    price: 3250,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'PROMEGRANATE ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/rk3vikch2aej30z/topaz12.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'birthday',
    price: 3890,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'SIMPLY PINK ROSE & LILY',
    image: 'https://dl.dropboxusercontent.com/s/lxcnm8toxj87lk5/glaze.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3990,
    countInStock: 2,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LUXURY WHITE ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/bvm23mmmn4ovxb4/luxury_white_rose.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Sweep them off their feet with this luxury Appleyard bouquet of classic velvet red, highness roses, the ultimate luxury gift to say "I love you" .',
    category: 'romance',
    price: 2300,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'LILY',
    image:
      'https://dl.dropboxusercontent.com/s/3btrynrevzf5x8n/peonyroselily-appleyard.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A beautifully unique mixture of luxury roses, certain to impress your partner this Valentine"s Day.',
    category: 'romance',
    price: 3150,
    countInStock: 4,
    rating: 4,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX 12 RED ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/m6gkfb0hk60p4e7/letterbox_12_1.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'birthday',
    price: 3860,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX FRANGIPAN',
    image:
      'https://dl.dropboxusercontent.com/s/a54k41dkkymxr99/frangipannew.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'romance',
    price: 3300,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX WHITE ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/iq9tszbe621rfce/letterbox_flowers_-_white_roses_-_flowers_by_post.png?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'romance',
    price: 3250,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'PINK LILY',
    image:
      'https://dl.dropboxusercontent.com/s/20hqx0x1csw1y2p/pink-lily-pot-plant.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This includes pink antique carnations, lilac roses and sugar flair hypericum berries. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one\'s letterbox. A stunning bouquet to treat Mum this Mother"s Day.',
    category: 'romance',
    price: 2800,
    countInStock: 4,
    rating: 4.5,
    numReviews: 6,
  },
  {
    name: 'RED ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/67os0s6x5hbj7cq/redrose_hatbox.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "These pretty roses in pink, white and lilac create a beautiful collection that will make any occasion extra special. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one's letterbox.",
    category: 'romance',
    price: 2600,
    countInStock: 3,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'SORBET ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/rst3nwf4utsxpft/sorbet-roses-appleyard-chair.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "These pretty roses in pink, white and lilac create a beautiful collection that will make any occasion extra special. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one's letterbox.",
    category: 'romance',
    price: 3280,
    countInStock: 3,
    rating: 3,
    numReviews: 3,
  },
  {
    name: 'STARGAZER LILY',
    image:
      'https://dl.dropboxusercontent.com/s/r7xoho2honykt8r/stargazerlilycutflower-2.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "Sweep them off their feet with this luxury Appleyard bouquet of classic velvet red, highness roses, the ultimate luxury gift to say 'I love you'.",
    category: 'romance',
    price: 3750,
    countInStock: 2,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'VANILLA ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/k8uvi9orti4s2z5/vanilla.png?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "A beautifully unique mixture of luxury roses, certain to impress your partner this Valentine's Day.",
    category: 'romance',
    price: 2750,
    countInStock: 2,
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: 'WHITE ROSE PLANT',
    image:
      'https://dl.dropboxusercontent.com/s/9o78phlqmnidphf/whiteroseplant-plant-grey-pot.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This includes pink antique carnations, lilac roses and sugar flair hypericum berries. ',
    category: 'romance',
    price: 1800,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: '20 roses',
    image:
      'https://dl.dropboxusercontent.com/s/syo5yciqugii6lt/19_20_sept_18_raw-3563-1_4.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "These pretty roses in pink, white and lilac create a beautiful collection that will make any occasion extra special. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one's letterbox.",
    category: 'romance',
    price: 2990,
    countInStock: 0,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: '50  white roses',
    image:
      'https://dl.dropboxusercontent.com/s/8f8vdjux5b7mtd0/50_white_roses.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'romance',
    price: 3910,
    countInStock: 1,
    rating: 5,
    numReviews: 2,
  },
  {
    name: 'BUTTERS COCH',
    image:
      'https://dl.dropboxusercontent.com/s/r8kafoo6h5zlm4l/butterscoch_new.png?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful peach vintage roses with delicate ammi, seasonal scented stocks and blush pink sugar flair hypericum berries make this delightful bouquet the perfect spring gift.',
    category: 'romance',
    price: 2800,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'CHANTI LILY',
    image:
      'https://dl.dropboxusercontent.com/s/ax27w0ib1ydm1cc/chantilly.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful crisp white scented oriental lilies, lilac nightingale roses with bold purple lisianthus and country garden blue veronica.',
    category: 'romance',
    price: 3470,
    countInStock: 1,
    rating: 5,
    numReviews: 4,
  },
  {
    name: 'WHITE ROSE PLANT',
    image:
      'https://dl.dropboxusercontent.com/s/9o78phlqmnidphf/whiteroseplant-plant-grey-pot.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This includes pink antique carnations, lilac roses and sugar flair hypericum berries. ',
    category: 'newbaby',
    price: 1800,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: '20 roses',
    image:
      'https://dl.dropboxusercontent.com/s/syo5yciqugii6lt/19_20_sept_18_raw-3563-1_4.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "These pretty roses in pink, white and lilac create a beautiful collection that will make any occasion extra special. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one's letterbox.",
    category: 'newbaby',
    price: 2990,
    countInStock: 0,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: '50  white roses',
    image:
      'https://dl.dropboxusercontent.com/s/8f8vdjux5b7mtd0/50_white_roses.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'newbaby',
    price: 3910,
    countInStock: 1,
    rating: 5,
    numReviews: 2,
  },
  {
    name: 'BUTTERS COCH',
    image:
      'https://dl.dropboxusercontent.com/s/r8kafoo6h5zlm4l/butterscoch_new.png?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful peach vintage roses with delicate ammi, seasonal scented stocks and blush pink sugar flair hypericum berries make this delightful bouquet the perfect spring gift.',
    category: 'newbaby',
    price: 2800,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'CHANTI LILY',
    image:
      'https://dl.dropboxusercontent.com/s/ax27w0ib1ydm1cc/chantilly.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful crisp white scented oriental lilies, lilac nightingale roses with bold purple lisianthus and country garden blue veronica.',
    category: 'newbaby',
    price: 3470,
    countInStock: 1,
    rating: 5,
    numReviews: 4,
  },
  {
    name: 'STARGAZER LILY',
    image:
      'https://dl.dropboxusercontent.com/s/r7xoho2honykt8r/stargazerlilycutflower-2.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "Sweep them off their feet with this luxury Appleyard bouquet of classic velvet red, highness roses, the ultimate luxury gift to say 'I love you'.",
    category: 'anniversary',
    price: 3750,
    countInStock: 2,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'VANILLA ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/k8uvi9orti4s2z5/vanilla.png?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "A beautifully unique mixture of luxury roses, certain to impress your partner this Valentine's Day.",
    category: 'anniversary',
    price: 2750,
    countInStock: 2,
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: 'WHITE ROSE PLANT',
    image:
      'https://dl.dropboxusercontent.com/s/9o78phlqmnidphf/whiteroseplant-plant-grey-pot.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This includes pink antique carnations, lilac roses and sugar flair hypericum berries. ',
    category: 'anniversary',
    price: 1800,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: '20 roses',
    image:
      'https://dl.dropboxusercontent.com/s/syo5yciqugii6lt/19_20_sept_18_raw-3563-1_4.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      "These pretty roses in pink, white and lilac create a beautiful collection that will make any occasion extra special. You can easily send your best wishes with this bouquet, as the cleverly designed box fits neatly through your loved one's letterbox.",
    category: 'anniversary',
    price: 2990,
    countInStock: 0,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: '50  white roses',
    image:
      'https://dl.dropboxusercontent.com/s/8f8vdjux5b7mtd0/50_white_roses.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'anniversary',
    price: 3910,
    countInStock: 1,
    rating: 5,
    numReviews: 2,
  },
  {
    name: 'BUTTERS COCH',
    image:
      'https://dl.dropboxusercontent.com/s/r8kafoo6h5zlm4l/butterscoch_new.png?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful peach vintage roses with delicate ammi, seasonal scented stocks and blush pink sugar flair hypericum berries make this delightful bouquet the perfect spring gift.',
    category: 'anniversary',
    price: 2800,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'CHANTI LILY',
    image:
      'https://dl.dropboxusercontent.com/s/ax27w0ib1ydm1cc/chantilly.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful crisp white scented oriental lilies, lilac nightingale roses with bold purple lisianthus and country garden blue veronica.',
    category: 'anniversary',
    price: 3470,
    countInStock: 1,
    rating: 5,
    numReviews: 4,
  },
  {
    name: 'BLUEBELLE',
    image:
      'https://dl.dropboxusercontent.com/s/lacp42dvp08cle8/rosebud.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],

    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'congradulations',
    price: 3600,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },

  {
    name: 'GODDNESS',
    image:
      'https://dl.dropboxusercontent.com/s/uccw1m0pk22jzrm/dsc_2498.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Bring the garden inside with this heavenly bouquet of sweet avalanche roses, antique carnations, delicate alstroemeria & soft pink sugar flair hypericum berries.',
    category: 'congradulations',
    price: 3900,
    countInStock: 2,
    rating: 2.5,
    numReviews: 2,
  },
  {
    name: 'ECUADOREAN ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/at7ai9ahq1xkse0/dsc_2515.jpg?dl=0dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'congradulations',
    price: 3800,
    countInStock: 1,
    rating: 3.5,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX 12 RED ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/m6gkfb0hk60p4e7/letterbox_12_1.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'congradulations',
    price: 3860,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX FRANGIPAN',
    image:
      'https://dl.dropboxusercontent.com/s/a54k41dkkymxr99/frangipannew.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'congradulations',
    price: 3300,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX WHITE ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/iq9tszbe621rfce/letterbox_flowers_-_white_roses_-_flowers_by_post.png?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'congradulations',
    price: 3250,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'PROMEGRANATE ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/lacp42dvp08cle8/rosebud.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'The first bouquet is a stunning arrangement of pure white fragrant oriental lilies with vibrant yellow roses, sugar flair hypericum berries and alluring lilac memory lane roses..',
    category: 'congradulations',
    price: 3890,
    countInStock: 6,
    rating: 5,
    numReviews: 7,
  },
  {
    name: '50 ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/0vnqt39klwhvrd3/50_red_roses.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'congradulations',
    price: 3200,
    countInStock: 4,
    rating: 3.5,
    numReviews: 5,
  },
  {
    name: 'LETTERBOX 12 RED ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/m6gkfb0hk60p4e7/letterbox_12_1.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'congradulations',
    price: 3860,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'LETTERBOX FRANGIPAN',
    image:
      'https://dl.dropboxusercontent.com/s/a54k41dkkymxr99/frangipannew.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 20TH JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'congradulations',
    price: 3300,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'LETTERBOX WHITE ROSES',
    image:
      'https://dl.dropboxusercontent.com/s/iq9tszbe621rfce/letterbox_flowers_-_white_roses_-_flowers_by_post.png?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'A stunning bouquet of sky blue veronica, with white Ecuadorean roses.',
    category: 'congradulations',
    price: 3250,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'PROMEGRANATE ROSE',
    image:
      'https://dl.dropboxusercontent.com/s/rk3vikch2aej30z/topaz12.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'Beautiful lilac memory lane roses with white lisianthus, veronica and summer scented lavender.',
    category: 'congradulations',
    price: 3890,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'SIMPLY PINK ROSE & LILY',
    image: 'https://dl.dropboxusercontent.com/s/lxcnm8toxj87lk5/glaze.jpg?dl=0',
    additionalInfo: 'DELIVERY FROM 23RD JUNE',
    additionalImg: [
      'https://dl.dropboxusercontent.com/s/ctdx2u9xglz4oy9/Screen%20Shot%200002-07-17%20at%2022.56.43.png?dl=0',
      'https://dl.dropboxusercontent.com/s/lspvhu8ngicz0sf/Screen%20Shot%200002-07-17%20at%2022.57.00.png?dl=0',
      'https://dl.dropboxusercontent.com/s/ny2y0f7z5dkeoek/Screen%20Shot%200002-07-17%20at%2022.57.10.png?dl=0',
      'https://dl.dropboxusercontent.com/s/g06v5si3uydzcor/bluebelle-xl.jpg?dl=0',
    ],
    description:
      'This delightful bouquet of luxury flowers is a unique selection of gorgeous antique carnations with heavenly scented white oriental lilies, avalanche roses and finished with vibrant green bell. Why not add a box of chocolates to make a truly unforgettable gift?',
    category: 'congradulations',
    price: 3990,
    countInStock: 2,
    rating: 3.5,
    numReviews: 2,
  },
]

export default products
