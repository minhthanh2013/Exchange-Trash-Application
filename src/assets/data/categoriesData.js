const categoriesData = [
  {
    id: '1',
    image: require('../images/plastic.jpg'),
    title: 'Rác nhựa',
    selected: false,
    ingredients: [
      {
        id: '1',
        name: 'Chai nhựa',
        image: require('../images/plastic-bottle.jpg'),
        amount:0
      },
      {
        id: '2',
        name: 'Túi nhựa',
        image: require('../images/plastic-bag.jpg'),
        amount:0
      },
    ],
  },
  {
    id: '2',
    image: require('../images/paper.jpg'),
    title: 'Rác giấy',
    selected: false,
    ingredients: [
      {
        id: '1',
        name: 'Thùng giấy',
        image: require('../images/box.jpg'),
        amount:0
      },
      {
        id: '2',
        name: 'Giấy',
        image: require('../images/paper-details.jpg'),
        amount:0
      },
    ],
  },
  {
    id: '3',
    image: require('../images/can.jpg'),
    title: 'Kim loại',
    selected: false,
    ingredients: [
      {
        id: '1',
        name: 'Lon',
        image: require('../images/can-details.jpg'),
        amount:0
      },
      {
        id: '2',
        name: 'Sắt/Thép',
        image: require('../images/iron.jpg'),
        amount:0
      },
    ],
  },
  {
    id: '4',
    image: require('../images/bottle.jpg'),
    title: 'Thủy tinh',
    selected: false,
    ingredients: [
      {
        id: '1',
        name: 'Chai',
        image: require('../images/bottle-details.jpg'),
        amount:0
      },
      {
        id: '2',
        name: 'Kính',
        image: require('../images/glass-details.jpg'),
        amount:0
      },
    ],
  },
  {
    id: '5',
    image: require('../images/electronics.jpg'),
    title: 'Điện tử',
    selected: false,
    ingredients: [
      {
        id: '1',
        name: 'Bin',
        image: require('../images/battery.jpg'),
        amount:0
      },
      {
        id: '2',
        name: 'Thiết bị điện tử',
        image: require('../images/electronic-device.jpg'),
        amount:0
      },
    ],
  }
];

export default categoriesData;
