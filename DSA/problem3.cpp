#include<iostream>
using namespace std;

int main(){
    int a[3],ans[3],temp;
    string n;
    cin >> a[0] >> a[1] >> a[2];
    cin.ignore();
    cin >> n;
    cout << n;
    for(int i=0; i<2; i++){
        for(int j=i+1; j<3; j++){
            if(a[i]>a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    for(int i = 0; i<3; i++){
        if(n[i] == 'A'){
            ans[i] = a[0];
        }
        else if(n[i] == 'B'){
            ans[i] = a[1];
        }
        else if(n[i] == 'C'){
            ans[i] = a[2];
        }
    }
    cout << ans[0] << " " << ans[1] << " " << ans[2];
    return 0;
}
