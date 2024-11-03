import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type AddItemProps = {
    route: RouteProp<MainStackParamList, "AddItem">,
    navigation: FrameNavigationProp<MainStackParamList, "AddItem">,
};

export function AddItemScreen({ navigation }: AddItemProps) {
    return (
        <scrollView className="p-4">
            <stackLayout>
                <label className="text-2xl font-bold mb-4">Add New Item</label>
                
                {/* Input Form */}
                <stackLayout className="mb-4">
                    <label className="font-bold mb-1">Item Name</label>
                    <textField 
                        className="p-2 bg-white rounded-lg border-gray-300 border-width-1"
                        hint="Enter item name"
                    />
                </stackLayout>

                <stackLayout className="mb-4">
                    <label className="font-bold mb-1">Expiry Date</label>
                    <datePicker className="mb-2" />
                </stackLayout>

                <stackLayout className="mb-4">
                    <label className="font-bold mb-1">Category</label>
                    <button className="p-2 bg-white rounded-lg border-gray-300 border-width-1 text-left">
                        Select Category
                    </button>
                </stackLayout>

                {/* Action Buttons */}
                <gridLayout columns="*, *" className="gap-2">
                    <button 
                        col="0"
                        className="bg-gray-500 text-white p-4 rounded-lg"
                        onTap={() => navigation.goBack()}
                    >
                        Cancel
                    </button>
                    <button 
                        col="1"
                        className="bg-green-500 text-white p-4 rounded-lg"
                        onTap={() => {
                            // TODO: Save item
                            navigation.goBack();
                        }}
                    >
                        Save Item
                    </button>
                </gridLayout>

                {/* Scanning Options */}
                <stackLayout className="mt-8">
                    <label className="text-xl font-bold mb-2">Quick Add Options</label>
                    <button className="p-4 bg-blue-500 text-white rounded-lg mb-2">
                        Scan Barcode
                    </button>
                    <button className="p-4 bg-blue-500 text-white rounded-lg mb-2">
                        Take Photo
                    </button>
                    <button className="p-4 bg-blue-500 text-white rounded-lg">
                        Scan Receipt
                    </button>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}