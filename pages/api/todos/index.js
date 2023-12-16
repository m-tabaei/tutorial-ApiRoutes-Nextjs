import { todos } from "../../../data/todos";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { todo } = req.body;
    const newTodo = {
      id: todo.length + 1,
      title: todo,
    };
    res.status(201).json({
      message: "succsess",
      data: newTodo,
    });
  } else if (req.method === "DELETE") {
    res.status(200).json({ message: "All todos Deleted", data: [] });
  } else if (req.method === "PUT") {
    res.status(200).json({
      message: "All data Replaced",
      data: req.body,
    });
  }
}
