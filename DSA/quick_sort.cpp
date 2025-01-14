#include<iostream>
using namespace std;

int partition(int a[],int l,int r){
	int x = l;
	int y = r;
	int p = a[l];
	int temp;
	while(x<y){
		while(a[x]<=p&&x<r){
			x++;
		}
		while(a[y]>=p&&y>l){
			y--;
		}
		if(x<y){
			temp = a[x];
			a[x] = a[y];
			a[y] = temp;
		}
	}
	a[l] = a[y];
	a[y] = p;
	return y;
}

void quickSort(int a[],int l,int r){
	if(l<r){
		int p = partition(a,l,r);
		quickSort(a,l,p-1);
		quickSort(a,p+1,r);
	}
}

int main(){
	int a[]={9,8,7,6,5,4,3,2,1,0};
	quickSort(a,0,9);
	for(int i=0; i<10; i++){
		cout << a[i] << " ";
	}
	return 0;
}
