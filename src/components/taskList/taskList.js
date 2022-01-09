import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const TaskList = ({task, checkBox, id, taskList, setTaskList}) => {
  const handleCheckBox = index => {
    setTaskList(
      taskList.map(task =>
        task.id === index ? {...task, checked: !task.checked} : task,
      ),
    );
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={checkBox}
        onValueChange={() => handleCheckBox(id)}
        style={styles.checkBox}
      />
      <Text style={checkBox ? styles.textListCheck : styles.textList}>
        {task.task}
      </Text>
      <TouchableOpacity
        style={styles.containerDelete}
        onPress={() => deleteTask(task.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textList: {
    flex: 0.8,
    paddingVertical: 10,
    marginVertical: 5,
    fontSize: 30,
    textAlign: 'center',
  },
  textListCheck: {
    flex: 0.8,
    paddingVertical: 10,
    marginVertical: 5,
    fontSize: 30,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  checkBox: {
    alignSelf: 'center',
  },
  containerDelete: {
    flex: 0.2,
    marginVertical: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 40,
  },
  delete: {
    margin: 0,
    color: '#ffffff',
  },
});
