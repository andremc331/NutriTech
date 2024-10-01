CREATE TABLE alimento (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  grupo_id INTEGER UNSIGNED NOT NULL,
  descricao VARCHAR(400) NOT NULL,
  PRIMARY KEY(id),
  INDEX Alimento_FKIndex1(grupo_id)
);

CREATE TABLE alimento_has_preparacao (
  alimento_id INTEGER UNSIGNED NOT NULL,
  preparacao_id INTEGER UNSIGNED NOT NULL,
  energia FLOAT NULL,
  proteina FLOAT NULL,
  lipidio FLOAT NULL,
  carboidrato FLOAT NULL,
  fibra FLOAT NULL,
  colesterol FLOAT NULL,
  agmono FLOAT NULL,
  agpoli FLOAT NULL,
  aquilinoleico FLOAT NULL,
  aqtranstol FLOAT NULL,
  acucartotal FLOAT NULL,
  acucaradicao FLOAT NULL,
  calcio FLOAT NULL,
  magnesio FLOAT NULL,
  manganes FLOAT NULL,
  fosforo FLOAT NULL,
  ferro FLOAT NULL,
  sodio FLOAT NULL,
  sodioadicao FLOAT NULL,
  potassio FLOAT NULL,
  cobre FLOAT NULL,
  zinco FLOAT NULL,
  selenio FLOAT NULL,
  retinol FLOAT NULL,
  vitamina_a FLOAT NULL,
  tiamina FLOAT NULL,
  riboflavina FLOAT NULL,
  niacina FLOAT NULL,
  niacina_ne FLOAT NULL,
  piridoxina FLOAT NULL,
  cobalamina FLOAT NULL,
  folato FLOAT NULL,
  vitamina_d FLOAT NULL,
  vitamina_e FLOAT NULL,
  vitamina_c FLOAT NULL,
  PRIMARY KEY(alimento_id, preparacao_id),
  INDEX Alimento_has_Preparacao_FKIndex1(alimento_id),
  INDEX Alimento_has_Preparacao_FKIndex2(preparacao_id)
);

CREATE TABLE cardapio (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  conta_usuario_id INTEGER UNSIGNED NOT NULL,
  conta_id INTEGER UNSIGNED NOT NULL,
  alimento_id INTEGER UNSIGNED NOT NULL,
  nome CHAR(20) NOT NULL,
  alimento CHAR(20) NOT NULL,
  PRIMARY KEY(id, conta_usuario_id, conta_id),
  INDEX cardapio_FKIndex2(conta_id, conta_usuario_id),
  INDEX cardapio_FKIndex2(alimento_id)
);

CREATE TABLE conta (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_id INTEGER UNSIGNED NOT NULL,
  ind_imc FLOAT NULL,
  PRIMARY KEY(id, usuario_id),
  INDEX conta_FKIndex1(usuario_id)
);

CREATE TABLE grupo (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  descricao TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE peso (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  conta_usuario_id INTEGER UNSIGNED NOT NULL,
  conta_id INTEGER UNSIGNED NOT NULL,
  peso_cadastrado FLOAT NOT NULL,
  peso_atualizado FLOAT NOT NULL,
  PRIMARY KEY(id),
  INDEX peso_FKIndex1(conta_id, conta_usuario_id)
);

CREATE TABLE preparacao (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  descricao INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE usuario (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(8) NOT NULL,
  nome CHAR(20) NULL,
  peso FLOAT NULL,
  altura FLOAT NULL,
  idade INT NULL,
  PRIMARY KEY(id)
);
