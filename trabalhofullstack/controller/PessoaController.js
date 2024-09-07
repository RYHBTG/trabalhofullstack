const { Pessoa } = require('../Models');

// Criação de uma nova pessoa
exports.createPessoa = async (req, res) => {
  try {
    const { Nome, CPF, Telefone } = req.body;
    
    const novaPessoa = await Pessoa.create({
      Nome,
      CPF,
      Telefone,
    });

    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
  }
};

// Leitura de todas as pessoas
exports.getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
  }
};

// Leitura de uma pessoa por ID
exports.getPessoaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message });
  }
};

// Atualização de uma pessoa
exports.updatePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nome, CPF, Telefone } = req.body;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    await pessoa.update({
      Nome,
      CPF,
      Telefone,
    });

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pessoa', details: error.message });
  }
};

// Exclusão de uma pessoa
exports.deletePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    await pessoa.destroy();
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pessoa', details: error.message });
  }
};
