import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type InfoRowProps = {
  label: string;
  value: string;
};

/**
 * InfoRow
 * Một dòng thông tin dạng "Nhãn: Giá trị" bên trong thẻ thông tin sinh viên.
 * Tách riêng để InfoCard có thể lặp lại nhiều dòng mà không lặp code.
 */
export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  label: {
    fontSize: 13,
    color: '#374151',
  },
  value: {
    fontSize: 13,
    color: '#374151',
  },
});
