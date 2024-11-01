package main

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/lib/pq"
)

func main() {
	// Serve static files from the build directory
	fmt.Println("server is running")
	fs := http.FileServer(http.Dir("./build"))
	http.Handle("/", fs)

	connStr := "user=postgres password= dbname= sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Start the server
	http.ListenAndServe(":8080", nil)
	fmt.Println("server is running")
}
