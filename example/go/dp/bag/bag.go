package bag

import "fmt"

type Thing struct {
	no     int
	weight int
	value  int
}

func dp(weight int) {
	things := []Thing{
		{no: 1, weight: 2, value: 12},
		{no: 2, weight: 1, value: 10},
		{no: 3, weight: 3, value: 20},
		{no: 4, weight: 2, value: 15},
	}

	results := make([][]int, 0)

	for i := 0; i < len(things)+1; i++ {
		results = append(results, make([]int, 0))
		for j := 0; j < weight; j++ {
			results[i] = append(results[i], 0)
		}
	}

	for i := 1; i < len(things); i++ {
		for j := things[i-1].weight; j < weight; j++ {
			results[i][j] = max(results[i-1][j], results[i-1][j+1-things[i-1].weight]+things[i-1].value)
		}
	}

	fmt.Println(results)
}

func max(a int, b int) int {
	if a < b {
		a = b
	}

	return a
}
