'use strict'; {
  
  const tasks = ['掃除', '買い物', '散歩'];
  
  function taskPreview() {
    console.log('=======================');
    console.log('現在持っているタスク一覧');
    console.log('=======================');
  
    tasks.forEach((task, index) => {
      console.log(`${index} : ${task}`)
    });
  }

  function taskAdd(newTask) {
    newTask = prompt('タスクを入力してください');
    tasks.push(newTask);
    alert('新しいタスクを追加しました。');
    taskPreview();
    prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
  }
  
  taskPreview();
  taskAdd();
  
}