// Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
db.produtos.countDocuments({ nome: { $regex: /Mc/ } }, { nome: 1, tags: 1, _id: 0 });
