const { query } = require("express");
const connection = require("../config/connection");

const handleAddNewStallExecutive = (req, res) => {
  const { userName, password, mailId, phoneNo, stallId } = req.body;
  const query =
    'INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES (?, ?, ?, ?, "stallexecutive");';
  connection.query(
    query,
    [userName, password, mailId, phoneNo],
    (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      let userId = result.insertId;
      const stallexQuery =
        "INSERT INTO stall_executive (user_id, stall_id) VALUES (?, ?);";
      connection.query(stallexQuery, [userId, stallId], (err, result) => {
        if (err) {
          return res.status(400).json(err);
        }
        return res.status(200).json({ success: true });
      });
    }
  );
};

const handleEditStallExecutive = (req, res) => {
    const {stallId} = req.body;
    const stallExecutiveId = req.params.sEID;
    const query = 'UPDATE stall_executive SET stall_id = ? WHERE stall_executive_id = ?;';
    connection.query(query, [stallId, stallExecutiveId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json({success: true});
    })
}

const handleDeleteStallExecutive = (req, res) => {
    const stallExecutiveId = req.params.sEID;
    const query = 'DELETE FROM stall_executive WHERE stall_executive_id = ?;';
    connection.query(query, [stallExecutiveId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(204).send();
    })
}

const getStallExecutive = (req, res) => {
    const stallExecutiveId = req.params.sEID;
    const query = 'SELECT s.stall_executive_id, u.user_name, u.phone_no, u.mail_id, st.stall_name FROM stall_executive s JOIN user u ON s.user_id = u.user_id JOIN stall st ON s.stall_id = st.stall_id WHERE stall_executive_id = ?;';
    connection.query(query, [stallExecutiveId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getAllExecutives = (req, res) => {
  const query = "SELECT se.user_id, u.user_name, u.mail_id, s.stall_name FROM stall_executive se JOIN user u ON se.user_id = u.user_id JOIN stall s ON se.stall_id = s.stall_id;";
  connection.query(query, (err, result) => {
    if(err){
      return res.status(400).json(err);
    }
    return res.status(200).json(result);
  })
}

module.exports = {
    handleAddNewStallExecutive,
    handleEditStallExecutive,
    handleDeleteStallExecutive,
    getStallExecutive,
    getAllExecutives
}
