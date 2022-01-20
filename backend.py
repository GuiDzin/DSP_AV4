from operator import truediv
from config import *
from modelo import *

@app.route("/")
def inicio():
    return 'Sistema de Cadastro Pokemon World.' +\
        '<a href= "/listar_pokemons">Operação listar</a>'
        
#Função genérica para Listar
@app.route("/listar/<string:classe>")
def listar(classe):
    #Obtem dados da classe informada
    dados = None
    if classe == "Pessoa":
        dados = db.session.query(Pessoa).all()
    elif classe == "Item":
        dados = db.session.query(Item).all()
    elif classe == "Tipo":
        dados = db.session.query(Tipo).all()
    elif classe == "Natureza":
        dados = db.session.query(Natureza).all()
    elif classe == "Habilidade":
        dados = db.session.query(Habilidade).all()
    elif classe == "Pokemon":
        dados = db.session.query(Pokemon).all()
    elif classe == "Time":
        dados = db.session.query(Time).all()
    elif classe == "Treinador":
        dados = db.session.query(Treinador).all()
    elif classe == "Ginasio":
        dados = db.session.query(Ginasio).all()
    elif classe == "Lider":
        dados = db.session.query(Lider).all()
    #Converter dados para json
    lista_jsons = [x.json() for x in dados]
    #Converter a lista de Python para json
    resposta = jsonify(lista_jsons)
    #Permitir resposta para outras pedidos oriundos de outras tecnologias
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

#Funções para incluir
#Classe 1: Pessoa
@app.route("/incluir_pessoa", methods=['post'])
def incluir_pessoa():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Pessoa(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 2: Item
@app.route("/incluir_item", methods=['post'])
def incluir_item():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Item(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 3: Tipo
@app.route("/incluir_tipo", methods=['post'])
def incluir_tipo():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Tipo(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 4: Natureza
@app.route("/incluir_natureza", methods=['post'])
def incluir_natureza():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Natureza(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 5: Habilidade
@app.route("/incluir_habilidade", methods=['post'])
def incluir_habilidade():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Habilidade(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta   

#Classe 6: Pokemon
@app.route("/incluir_pokemon", methods=['post'])
def incluir_pokemon():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Pokemon(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta   

#Classe 7: Time
@app.route("/incluir_time", methods=['post'])
def incluir_time():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Time(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 8: Treinador
@app.route("/incluir_treinador", methods=['post'])
def incluir_treinador():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Treinador(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 9: Ginásio
@app.route("/incluir_ginasio", methods=['post'])
def incluir_ginasio():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Ginasio(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

#Classe 10: Líder
@app.route("/incluir_lider", methods=['post'])
def incluir_lider():
    resposta = jsonify({"resultado": "ok", "detalhes":"ok"})
    dados = request.get_json()
    try:
        novo = Lider(**dados)
        db.session.add(novo)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado" : "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

app.run(debug=True)

