#include<iostream>
#include<cstring>
using namespace std;

int main(){
    int n, flag=0;
    cin >> n;
    cin.ignore();
    string a, name[n], strTemp;
    char surname[n][50], temp[50];
    for(int i=0; i<n ;i++){
        getline(cin, name[i]);
        for(int j=0; j<name[i].length(); j++){
            if(flag == 0){
                if(name[i][j]>=65&&name[i][j]<=90){
                    flag = 1;
                    a += name[i][j];
                }
            }
            else{
                if(name[i][j] != 32 || (name[i][j] >= 65 && name[i][j] <= 97)){
                    a += name[i][j];
                }
                else{
                    break;
                }
            }
        }
        flag = 0;
        strcpy(surname[i],a.c_str());
        a = "";
    }
    for(int i=0; i<n-1; i++){
        for(int j=i+1; j<n; j++){
            if(strcmp(surname[i],surname[j]) > 0){
                strTemp =name[i];
                name[i] = name[j];
                name[j] = strTemp; 
                
                strcpy(temp,surname[i]);
                strcpy(surname[i],surname[j]);
                strcpy(surname[j],temp);
            }
        }
    }
    for(int i=0; i<n; i++){
        cout << endl << name[i];
    }
    return 0;
}
