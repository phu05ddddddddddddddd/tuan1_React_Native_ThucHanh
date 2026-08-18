import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type SearchFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

/**
 * SearchField
 * Ô tìm kiếm thông tin sinh viên. Là component có kiểm soát (controlled):
 * value và onChangeText luôn được truyền từ cha xuống.
 */
export default function SearchField({
  value,
  onChangeText,
  placeholder = 'Tìm kiếm thông tin...',
}: SearchFieldProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      accessibilityLabel="Ô tìm kiếm thông tin sinh viên"
      accessibilityHint="Nhập từ khóa để tìm thông tin"
      returnKeyType="search"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111827',
  },
});
