matriz = [[0, 1, 0, 0],
          [1, 0, 1, 1],
          [0, 1, 0, 1],
          [0, 1, 1, 0]]

def dfs(v_inicial, v_final, v_visitados=[], trayectoria=[]):
    v_visitados = v_visitados + [v_inicial]
    trayectoria = trayectoria + [v_inicial]
    if v_inicial == v_final:
        return [trayectoria]
    trayectorias = []
    for vecino in range(len(matriz[v_inicial])):
        if matriz[v_inicial][vecino] == 1:
            if vecino not in v_visitados:
                nuevas_trayectorias = dfs(vecino, v_final,
                                          v_visitados=v_visitados,
                                          trayectoria=trayectoria)
                for t in nuevas_trayectorias:
                    trayectorias.append(t)
    return trayectorias

inicio = int(input("Ingrese el vértice inicial: "))
fin = int(input("Ingrese el vértice final: "))
print("Las trayectorias simples entre", inicio, "y", fin,
      "son:", dfs(inicio-1, fin-1))
