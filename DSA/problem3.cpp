#include<iostream>
using namespace std;

int main(){
    int t, hr, min, sec;
    cin >> t;
    hr = t / (60*60);
    t = t % (60*60);
    min = t / 60;
    t = t % 60;
    sec = t;
    cout << hr << " : " << min << " : " << sec;
    return 0;
}
