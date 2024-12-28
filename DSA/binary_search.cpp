#include<iostream>
using namespace std;

int main(){
	int a[] = {1,2,3,4,5,6,7,8,9,10}, key, l = 0, n = 9, mid;
	cout << "Enter the key: ";
	cin >> key;
	while(l<=n){
		mid = (l+n)/2;
		if(key == a[mid]){
			cout << "Key found at " << mid+1;
			exit(0);
		}
		else if(key<a[mid]){
			n = mid-1;
		}
		else{
			l = mid+1;
		}
	}
	cout << "Key not found!";
	return 0;
}
