import React from 'react';
import { StorageManagerDisplayText } from '../../utils/displayText';
import { ComponentClassName } from '@aws-amplify/ui';
import { Text } from '@aws-amplify/ui-react';

export interface FileListHeaderProps {
  allUploadsSuccessful: boolean;
  displayText: StorageManagerDisplayText;
  fileCount: number;
  remainingFilesCount: number;
  selectedFilesCount?: number;
}

export function FileListHeader({
  allUploadsSuccessful,
  displayText,
  fileCount,
  remainingFilesCount,
  selectedFilesCount = 0,
}: FileListHeaderProps): JSX.Element {
  const { getFilesUploadedText, getRemainingFilesText, getSelectedFilesText } =
    displayText;

  return (
    <Text className={ComponentClassName.StorageManagerPreviewerText}>
      {selectedFilesCount
        ? getSelectedFilesText(selectedFilesCount)
        : allUploadsSuccessful
        ? getFilesUploadedText(fileCount)
        : getRemainingFilesText(remainingFilesCount)}
    </Text>
  );
}
