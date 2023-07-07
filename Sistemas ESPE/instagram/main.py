import pandas as pd
import numpy as np

# Crear conjunto de datos
df = pd.DataFrame({'horas': [1, 2, 4, 5, 5, 6, 6, 7, 8, 10, 11, 11, 12, 12, 14],
                   'puntuacion': [64, 66, 76, 73, 74, 81, 83, 82, 80, 88, 84, 82, 91, 93, 89]})

# Obtener las variables independientes (X) y dependiente (y)
X = df[['horas']]
y = df['puntuacion']

# Agregar una columna de unos para el término independiente en la ecuación de regresión
X = np.c_[np.ones(X.shape[0]), X]

# Calcular los coeficientes de la regresión lineal usando el método de mínimos cuadrados
coeficientes = np.linalg.inv(X.T.dot(X)).dot(X.T).dot(y)

# Obtener los coeficientes individuales
intercepto = coeficientes[0]
pendiente = coeficientes[1]

# Predecir la puntuación del examen para un estudiante que estudió durante 9 horas
horas_estudio = 9
puntuacion_predicha = intercepto + pendiente * horas_estudio
print(puntuacion_predicha)
