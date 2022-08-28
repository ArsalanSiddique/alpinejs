document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        }
    }))


    Alpine.store('users', {
        name: "This is name of user.",
        posts: ["Post 01", "Post 02"]
    })
})