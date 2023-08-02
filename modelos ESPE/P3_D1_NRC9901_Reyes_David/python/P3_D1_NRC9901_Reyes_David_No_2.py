import random

def DFS(grafo, v, pintado, color, conjuntos):
    for u in grafo[v]:
        if not pintado[u]:
            pintado[u] = True
            color[u] = not color[v]
            conjuntos[color[u]].add(u)
            if not DFS(grafo, u, pintado, color, conjuntos):
                return False
        elif color[u] == color[v]:
            return False
    return True

def esBipartido(nodos, N):
    unidos = [[] for _ in range(N)]
    for (origen, destino) in nodos:
        unidos[origen].append(destino)
        unidos[destino].append(origen)
    pintado = [False] * N
    color = [False] * N
    conjuntos = [set(), set()]  # Conjuntos para las dos particiones
    for i in range(N):
        if not pintado[i]:
            pintado[i] = True
            conjuntos[color[i]].add(i)
            if not DFS(unidos, i, pintado, color, conjuntos):
                return False
    return conjuntos

n = int(input("Ingrese el tamaño de la matriz (nxm): "))
m = int(input())

matriz = [[0 for j in range(m)] for i in range(n)]
for i in range(n):
    for j in range(m):
        matriz[i][j] = random.randint(0, 1)

print("   ", end="")
for i in range(m):
    print(chr(ord('A') + i), end=" ")
print()

for i in range(n):
    print(chr(ord('A') + i), "  ", end="")
    for j in range(m):
        print(matriz[i][j], end=" ")
    print()

nodos = []
for i in range(n):
    for j in range(m):
        if matriz[i][j] == 1:
            nodos.append((i, j))

conjuntos = esBipartido(nodos, n * m)
if conjuntos:
    print("El grafo es bipartito")
    print("Conjunto 1:", conjuntos[0])
    print("Conjunto 2:", conjuntos[1])
else:
    print("El grafo no es bipartito")
