let todo;
let todos = [];
// 配列はconstでも中身を変えれる．不変なのは参照先．todosは参照先．異なるアドレスを与えることができない．なので一般的にconstで書く．
while (todo !== 'quit' ){
    todo = prompt('コマンドを入力してください(new, list, delete, quit)');
    if (todo === 'new'){
        let newTodo = prompt('新しいTodoを入力してください');
        todos.push(newTodo);
        console.log(`「${todos[todos.length -1]}」を追加しました`);
        console.log('*******************************');
    }else if(todo === 'list'){
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************************');
    }else if(todo === 'delete'){
        let index = parseInt(prompt('削除するインデックスを入力してください'));
        // promptは全てstringで受け取るので，parseIntしなきゃいけない
        if(index >=0 && index < todos.length){
            let deleteTodo = todos.splice(index, 1);
            console.log(`「${deleteTodo}」を削除しました`);
            console.log('*******************************');
        }
    }
}
console.log('アプリを終了しました');