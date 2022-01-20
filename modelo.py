from config import *

class Pessoa(db.Model): #1
    id =db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    sobreNome = db.Column(db.String(254))
    cidade = db.Column(db.String(254))
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Id {self.id}) Nome: {self.nome} ' +\
               f'{self.sobreNome}, Cidade: {self.cidade}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "nome": self.nome,
            "Sobrenome ": self.sobreNome,
            "cidade": self.cidade,
        }
        
class Item(db.Model): #2
    id = db.Column(db.Integer, primary_key=True)
    nome =  db.Column(db.String(254))
    funcao =  db.Column(db.String(254))
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Item({self.id}): {self.nome}, ' +\
               f'Função: {self.funcao}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Item:": self.nome,
            "Função:": self.funcao,
           
        }

class Tipo(db.Model): #3
    id = db.Column(db.Integer, primary_key=True)
    nome =  db.Column(db.String(254))
    vantagem = db.Column(db.String(254))
    desvantagem = db.Column(db.String(254))
    
     #Método para imprimir em texto
    def __str__(self):
        return f'Tipo({self.id}): {self.nome}, ' +\
               f'Vantagem: {self.vantagem}, Desvantagem: {self.desvantagem}'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Tipo:": self.nome,
            "Vantagem:": self.vantagem,
            "Desvantagem": self.desvantagem
           
        }
        
class Natureza(db.Model): #4
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    descricao = db.Column(db.String(254))
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Natureza({self.id}): {self.nome}, ' +\
               f'Descrição: {self.descricao}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Natureza:": self.nome,
            "Descrição:": self.de           
        }
        
class Habilidade(db.Model): #5
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    descricao = db.Column(db.String(254))
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Habilidade({self.id}): {self.nome}, ' +\
               f'Descrição: {self.descricao}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Habilidade:": self.nome,
            "Descrição:": self.de           
        }
        
class Pokemon(db.Model): #6
    #Atributos da classe Pokemon
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    categoria = db.Column(db.String(254))    
    tipo_id = db.Column(db.Integer, db.ForeignKey(Tipo.id), nullable=False)
    tipo = db.relationship("Tipo")   
    natureza_id = db.Column(db.Integer, db.ForeignKey(Natureza.id), nullable=False)
    natureza = db.relationship("Natureza")
    habilidade_id = db.Column(db.Integer, db.ForeignKey(Habilidade.id), nullable=False)
    habilidade = db.relationship("Habilidade")
    item_id = db.Column(db.Integer, db.ForeignKey(Item.id), nullable=False)
    item = db.relationship("Item")
        
    #Método para imprimir em texto
    def __str__(self):
        return f'Id {self.id}) {self.nome}, ' +\
               f'Categoria: {self.categoria}, Tipo {self.tipo}, Natureza: {self.natureza}, Habilidade: {self.habilidade} Item: {self.item}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "nome": self.nome,
            "tipo ": self.tipo.json(),
            "categoria": "Pokemon " + self.categoria,
            "Natureza ": self.natureza.json,
            "Habilidade ": self.habilidade.json,
            "Item: ": self.item.json()
        }
        
class Time(db.Model): #7
    
    id = id = db.Column(db.Integer, primary_key=True)
    poke1_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke1 =  db.relationship("Pokemon", foreign_keys=[poke1_id])
    poke2_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke2 =  db.relationship("Pokemon", foreign_keys=[poke2_id])
    poke3_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke3 =  db.relationship("Pokemon", foreign_keys=[poke3_id])
    poke4_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke4 =  db.relationship("Pokemon", foreign_keys=[poke4_id])
    poke5_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke5 =  db.relationship("Pokemon", foreign_keys=[poke5_id])
    poke6_id = db.Column(db.Integer, db.ForeignKey(Pokemon.id), nullable=False)
    poke6 =  db.relationship("Pokemon", foreign_keys=[poke6_id])  
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Time({self.id}): Pokemon 1: {self.poke1.nome},Pokemon 2: {self.poke2.nome},Pokemon 3: {self.poke3.nome},' +\
               f'Pokemon 4: {self.poke4.nome},Pokemon 5: {self.poke5.nome},Pokemon 6: {self.poke6.nome}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Pokemon 1:": self.poke1.nome.json(),
           
        }
        
class Treinador(db.Model): #8
    id = db.Column(db.Integer, primary_key=True)
    pessoa_id = db.Column(db.Integer, db.ForeignKey(Pessoa.id), nullable=False)
    pessoa =  db.relationship("Pessoa")
    time_id = db.Column(db.Integer, db.ForeignKey(Time.id), nullable=False)
    time =  db.relationship("Time")
    
     #Método para imprimir em texto
    def __str__(self):
        return f'Treinador({self.id}): {self.pessoa}, ' +\
               f'Time: {self.time}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Pessoa:": self.pessoa.json(),
            "Time:": self.time.json(),
           
        }

class Ginasio(db.Model): #9
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    cidade = db.Column(db.String(254))
    tipo_id = db.Column(db.Integer, db.ForeignKey(Tipo.id), nullable=False)
    tipo = db.relationship("Tipo")
    
    #Método para imprimir em texto
    def __str__(self):
        return f'Ginásio({self.id}): {self.nome}, ' +\
               f'Cidade: {self.cidade}, {self.tipo}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Nome:": self.nome,
            "Cidade:": self.cidade,
            "Tipo:": self.tipo.json()           
        }

class Lider(db.Model): #10
    id = db.Column(db.Integer, primary_key=True)
    treinador_id = db.Column(db.Integer, db.ForeignKey(Treinador.id), nullable=False)
    treinador =  db.relationship("Treinador")
    gin_id = db.Column(db.Integer, db.ForeignKey(Ginasio.id), nullable=False)
    gin =  db.relationship("Ginasio")
    insignia = db.Column(db.String(254))
    
     #Método para imprimir em texto
    def __str__(self):
        return f'Líder({self.id}): {self.treinador}, ' +\
               f'Ginásio: {self.gin}, insígnia: {self.insignia}.'
    
    #Método de expressão da classe em Json
    def json(self):
        return{
            "id": self.id,
            "Líder:": self.treinador.json(),
            "Ginásio:": self.gin.json(),
            "Insígnia:": self.insignia.json()           
        }

if __name__ == "__main__":
    
    #Apagar arquivo, se houver
    if os.path.exists(arquivobd):
        os.remove(arquivobd)
        
    #Criar tabela
    db.create_all()
    
    #Teste da classe Pokemon
    pe1 = Pessoa(nome ="Misty", sobreNome ="Kasumi" , cidade = "Cerulean")
    item1 = Item(nome = "Wise Glasses", funcao = "Aumenta poder de golpes Especiais")
    tipo1 = Tipo(nome = "Água", vantagem = "Fogo", desvantagem ="Grama")
    natu1 = Natureza(nome = "Corajoso", descricao = "Aumenta a defesa do Pokemon")
    hab1 = Habilidade(nome = "Illuminate", descricao = "Pokemons selvagens têm duas vezes mais chance de aparecer")
    poke1 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    poke2 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    poke3 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    poke4 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    poke5 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    poke6 = Pokemon(nome = "Staryu", tipo = tipo1, categoria = "Estrela", natureza = natu1, habilidade = hab1, item = item1 )
    
   
    time1 = Time(poke1 = poke1, poke2 = poke2 ,poke3 = poke3 ,poke4 = poke4 ,poke5 = poke5 ,poke6  = poke6)
    trein1 = Treinador(pessoa = pe1, time = time1)
    gin1 = Ginasio(nome = "Ginásio de Cerulean", cidade = "Cerulean", tipo = tipo1)
    lider1 = Lider(treinador = trein1, gin = gin1, insignia = "Insígnia da cascata")
    
    
    
    #Persistir
    db.session.add(pe1)
    db.session.add(item1)
    db.session.add(tipo1)
    db.session.add(natu1)
    db.session.add(hab1)
    db.session.add(poke1)
    db.session.add(poke2)
    db.session.add(poke3)
    db.session.add(poke4)
    db.session.add(poke5)
    db.session.add(poke6)
    db.session.add(time1)
    db.session.add(trein1)
    db.session.add(gin1)
    db.session.add(lider1)
    db.session.commit()
    
    #Exibir
    print(time1)
    
    