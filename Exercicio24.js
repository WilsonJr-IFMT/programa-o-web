const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 }
];


pessoas.forEach(pessoa => {
  console.log(pessoa["nome"]); 
});
