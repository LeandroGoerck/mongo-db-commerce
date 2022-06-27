db.produtos.find(
  {
    $and: [{ quantidade: { $not: { $eq: 50 } } }, { tags: { $exists: false } }],
  },
  { nome: 1, vendidos: 1, _id: 0 },
);
