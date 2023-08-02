import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

n = int(input("Ingrese el tamaño de la matriz (nxm): "))
m = int(input())
matriz = []
for i in range(n):
    fila = []
    for j in range(m):
        while True:
            valor = float(input(f"Ingrese el valor para la posición {chr(ord('A') + i)}{chr(ord('A') + j)}: "))
            if 0 <= valor <= 1:
                break
            else:
                print("El valor debe estar entre 0 y 1. Inténtalo de nuevo.")
        fila.append(valor)
    matriz.append(fila)

G = nx.from_numpy_array(np.array(matriz))
nx.draw(G, with_labels=True)
plt.show()
