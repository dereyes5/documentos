#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    int n, m;
    cout << "Ingrese el tamano de la matriz (nxm): ";
    cin >> n >> m;

    int matriz[n][m];
    srand(time(NULL));
    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j < m; j++)
        {
            matriz[i][j] = rand() % 2;
        }
    }

    cout << "   ";
    for(int i = 0; i < m; i++)
    {
        cout << char('A' + i) << " ";
    }
    cout << endl;

    for(int i = 0; i < n; i++)
    {
        cout << char('A' + i) << "  ";
        for(int j = 0; j < m; j++)
        {
            cout << matriz[i][j] << " ";
        }
        cout << endl;
    }

    int lazos = 0;
    int aristas = 0;
    int grado[n] = {0};

    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j < m; j++)
        {
            if(i == j && matriz[i][j] == 1)
            {
                lazos++;
            }
            if(matriz[i][j] == 1)
            {
                aristas++;
                grado[i]++;
            }
        }
    }

    cout << "Numero de lazos: " << lazos << endl;
    cout << "Numero de aristas: " << aristas << endl;

    for(int i = 0; i < n; i++)
    {
        cout << "Grado del vertice " << char('A' + i) << ": " << grado[i] << endl;
    }

    return 0;
}
