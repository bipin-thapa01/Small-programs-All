#include<iostream>
using namespace std;

int main(){
    int n,d,cnt=0,temp;
    cin >> n >> d;
    int p[n];
    for(int i=0; i<n; i++){
        cin >> p[i];
    }
    for(int i=0; i<n-1; i++){
        for(int j=i+1; j<n; j++){
            if(p[i]>p[j]){
                temp = p[i];
                p[i] = p[j];
                p[j] = temp;
            }
        }
    }
    cnt++;
    for(int i=0; i<n-1; i++){
        for(int j=i+1; j<n; j++){
            if(p[j]-p[i]>d){
                cnt++;
                i=j-1;
                break;
            }
        }
    }
    cout << cnt;
    return 0;
}
