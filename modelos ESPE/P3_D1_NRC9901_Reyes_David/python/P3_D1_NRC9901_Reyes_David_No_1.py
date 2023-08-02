import random

n = int(input("Ingrese el tamano de la matriz (nxm): "))
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

lazos = 0
aristas = 0
grado = [0] * n

for i in range(n):
    for j in range(m):
        if i == j and matriz[i][j] == 1:
            lazos += 1
        if matriz[i][j] == 1:
            aristas += 1
            grado[i] += 1

print("Numero de lazos: ", lazos)
print("Numero de aristas: ", aristas)

for i in range(n):
    print("Grado del vertice ", chr(ord('A') + i), ": ", grado[i])

