#include<iostream>
using namespace std;

int main(){
    int a[4][4], n;
    for(int i=0; i<4; i++){
        for(int j=0; j<4; j++){
            cin >> a[i][j];
        }
    }
    cin >> n;
    if(n==0){
        for(int i=0; i<4; i++){
            for(int j=3; j>=1; j--){
                if(a[i][j-1] == 0 || a[i][j-1] == a[i][j]){
                    a[i][j-1] += a[i][j];
                    for(int k=j; k<=3; k++){
                        if(k != 3){
                            a[i][k] = a[i][k+1];
                        }
                        else{
                            a[i][k] = 0;
                        }
                    }
                }
            }
        }
    }
    else if(n==1){
        for(int j=0; j<=3; j++){
            for(int i=3; i>=1; i--){
                if(a[i-1][j] == 0 || a[i-1][j] == a[i][j]){
                    a[i-1][j] += a[i][j];
                    for(int k=i; k<=3; k++){
                        if(k!=3){
                            a[k][j] = a[k+1][j];
                        }
                        else{
                            a[k][j] = 0;
                        }
                    }
                }
            }
        }
    }
    else if(n==2){
        for(int i=0; i<4; i++){
            for(int j=0; j<3; j++){
                if(a[i][j+1] == 0 || a[i][j+1] == a[i][j]){
                    a[i][j+1] += a[i][j];
                    for(int k = j; k >= 0; k--){
                        if(k!=0){
                            a[i][k] = a[i][k-1];
                        }
                        else{
                            a[i][k] = 0;
                        }
                    }
                }
            }
        }
    }
    else if(n==3){
        for(int j = 0; j<=3; j++){
            for(int i = 0; i<=2; i++){
                if(a[i+1][j] == 0 || a[i+1][j] == a[i][j]){
                    a[i+1][j] += a[i][j];
                    for(int k = i; k>= 0; k--){
                        if(k!=0){
                            a[k][j] = a[k-1][j];
                        }
                        else{
                            a[k][j] = 0;
                        }
                    }
                }
            }
        }
    }
    for(int i=0; i<4; i++){
        for(int j=0; j<4; j++){
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
