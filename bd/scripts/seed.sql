# Script para popular o banco com dados iniciais

CREATE TABLE usuario (
  id INTEGER NOT NULL PRIMARY KEY,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(8) NOT NULL,
  nome CHAR(20) NULL,
  peso FLOAT NULL,
  altura FLOAT NULL,
  idade INT NULL
);
INSERT INTO usuario(id,email,senha,nome,peso,altura,idade)
values(1,'victor@gmail.com','11E69g','Victor',75,1.80,20);

drop table metas
create domain chk_metas text check (value='Ganhar peso' or value='Perder peso' or value='Manter Peso');
 CREATE TABLE metas (
 id integer not null primary key,
   metas_usuario_id INTEGER NOT NULL,
	 metas chk_metas,
	 foreign key(metas_usuario_id) references usuario(id)
 );
insert into metas(id,metas_usuario_id,metas)
values(1,1,'Ganhar Peso')

drop table conta
CREATE TABLE conta (
  id INTEGER NOT NULL PRIMARY KEY,
  usuario_id INTEGER NOT NULL,
  ind_imc FLOAT NOT NULL,
  data_de_cadastro DATE NOT NULL,
  FOREIGN KEY(usuario_id) REFERENCES usuario(id)
);
INSERT INTO conta(id,usuario_id,ind_imc,data_de_cadastro)
values(1,1,85.7,'11/08/2000');

drop table peso
CREATE TABLE peso (
	id integer not null PRIMARY KEY,          
    peso_usuario_id INTeger NOT NULL,        
    pesagem DECIMAL(5, 2) NOT NULL,    
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	foreign key(peso_usuario_id) references usuario(id)
); 
insert into peso(id,peso_usuario_id,pesagem,data_registro)values
(1,1,75.8,'11/08/2000')

drop table preparacao
CREATE TABLE preparacao (
  id INTEGER NOT NULL primary key,
  descricao varchar(100) NOT NULL
);
insert into preparacao(id,descricao) values
 	(1,'Cru(a)'),
	(2,'Cozido(a)'),
	(3,'Grelhado(a)/brasa/churrasco'),
	(4,'Assado(a)'),
	(5,'Frito(a)'),
	(6,'Empanado(a)/à milanesa'),
	(7,'Refogado(a)'),
	(8,'Molho vermelho'),
	(9,'Molho branco'),
	(10,'Ao alho e óleo'),
	(11,'Com manteiga/óleo'),
	(12,'Ao vinagrete'),
	(13,'Ensopado'),
	(14,'Mingau'),
	(15,'Sopa'),
	(99,'Não se aplica');

drop table cardapio
CREATE TABLE cardapio (
  id INTEGER NOT NULL primary key,
--   cardapio_usuario_id INTEGER NOT NULL,
  cardapio_conta_id INTEGER NOT NULL,
	cardapio_preparacao integer not null,
  alimento CHAR(20) NOT NULL,
  data_dos_cardapios DATE NOT NULL,
  foreign key (cardapio_conta_id) references conta(id),
	foreign key (cardapio_preparacao) references preparacao(id)
);
insert into cardapio(id,cardapio_conta_id,cardapio_preparacao,alimento,data_dos_cardapios)
values(1,1,99,'Banana','11/02/2000');

select * from usuario