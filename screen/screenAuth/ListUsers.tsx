import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Iuser } from "../../types/IUser";
import { getAllUsers } from "../../http/user.services";
import { gStyle } from "../../Style/mainStyle";

const ListUsersScreen = () => {
  const [users, setUsers] = useState<Iuser[]>([] as Iuser[]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await getAllUsers().then((data) => setUsers(data));
  };
  console.log("users = ", users);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log("item = ", item)}>
            <Text style={gStyle.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text>ListUsers</Text>
    </View>
  );
};

export default ListUsersScreen;
