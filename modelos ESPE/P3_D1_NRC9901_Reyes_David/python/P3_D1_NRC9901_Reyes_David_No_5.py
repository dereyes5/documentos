def tipo_trayectoria(trayectoria):
    n = len(trayectoria)
    if n==1:
        return "Ciclo simple"
    else:
        for i in range(n):
            for j in range(i+1,n):
                if trayectoria[i] == trayectoria[j]:
                    if i == 0 and j == n-1:
                        return "Ciclo simple"
                    else:
                        return "Ciclo"
        return "Trayectoria simple"


trayectorias = [[0, 1, 2, 3], [0, 1, 3], [4, 5, 6], [7, 8, 7], [9, 10, 11], [12], [14], [15, 16]]
for trayectoria in trayectorias:
    print(trayectoria, tipo_trayectoria(trayectoria))
