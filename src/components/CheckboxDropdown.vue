<template>
    <div>
        <b-button :style="buttonStyle" @click="isDialogOpen = true">
            <div class="button-text">{{ buttonText }}</div>
        </b-button>
        <b-modal v-model="isDialogOpen" hide-footer class="custom-modal">
            <template v-slot:modal-header="{ close }">
                <div class="modal-header-content">
                    <h5 class="modal-title">Select Places Visited</h5>
                    <b-button variant="outline-danger" size="sm" @click="close">Close</b-button>
                </div>
            </template>
            <div class="treeselect-container"> 
                <treeselect :multiple="true" :options="treeselectOptions" :value="selected" :searchable="true"
                    @input="handleInput" :normalizer="normalizer">
                    <template #before-list>
                        <div class="d-flex p-1 gap-3 justify-content-center">
                            <button @click="selectAll()" type="button" class="btn btn-primary">Select All</button>
                            <button @click="deselectAll()" type="button" class="btn btn-secondary">Deselect All</button>
                        </div>
                    </template>
                </treeselect>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
    components: {
        Treeselect
    },
    data() {
        return {
            isDialogOpen: false,
            data: [
                {
                    id: '1',
                    label: 'North America',
                    children: [
                        {
                            id: '1-1',
                            label: 'United States',
                            children: [
                                { id: '1-1-1', label: 'California' },
                                { id: '1-1-2', label: 'New York' },
                                { id: '1-1-3', label: 'Texas' }
                            ]
                        },
                        {
                            id: '1-2',
                            label: 'Canada',
                            children: [
                                { id: '1-2-1', label: 'Ontario' },
                                { id: '1-2-2', label: 'Quebec' },
                                { id: '1-2-3', label: 'British Columbia' }
                            ]
                        }
                    ]
                },
                {
                    id: '2',
                    label: 'Europe',
                    children: [
                        {
                            id: '2-1',
                            label: 'United Kingdom',
                            children: [
                                { id: '2-1-1', label: 'England' },
                                { id: '2-1-2', label: 'Scotland' },
                                { id: '2-1-3', label: 'Wales' }
                            ]
                        },
                        {
                            id: '2-2',
                            label: 'Germany',
                            children: [
                                { id: '2-2-1', label: 'Bavaria' },
                                { id: '2-2-2', label: 'Berlin' },
                                { id: '2-2-3', label: 'Hamburg' }
                            ]
                        }
                    ]
                },
                {
                    id: '3',
                    label: 'Asia',
                    children: [
                        {
                            id: '3-1',
                            label: 'China',
                            children: [
                                { id: '3-1-1', label: 'Guangdong' },
                                { id: '3-1-2', label: 'Beijing' },
                                { id: '3-1-3', label: 'Shanghai' }
                            ]
                        },
                        {
                            id: '3-2',
                            label: 'India',
                            children: [
                                { id: '3-2-1', label: 'Maharashtra' },
                                { id: '3-2-2', label: 'Karnataka' },
                                { id: '3-2-3', label: 'Tamil Nadu' }
                            ]
                        }
                    ]
                }
            ],
            selected: [],
            selectedItems: []
        };
    },
    computed: {
        buttonText() {
            return this.selectedItems.length ? this.selectedItems.join(', ') : 'Select Places Visited';
        },
        buttonStyle() {
            return {
                backgroundColor: '#a8d5e5',
                color: '#134b5f',
                width: '100%',
                border: 'none',
                textAlign: 'left'
            };
        },
        treeselectOptions() {
            return this.data;
        }
    },
    watch: {
        selected: {
            handler(newValue) {
                this.updateSelectedItems();
            },
            deep: true
        }
    },
    methods: {
        selectAll() {
            const selectAllIds = (nodes) => {
                let ids = [];
                nodes.forEach(node => {
                    ids.push(node.id);
                    if (node.children) {
                        ids = ids.concat(selectAllIds(node.children));
                    }
                });
                return ids;
            };
            this.selected = selectAllIds(this.data);
        },
        deselectAll() {
            this.selected = [];
        },
        handleInput(newValue) {
            this.selected = newValue;
            this.updateSelectedItems();
            this.$emit('places-selected', this.selectedItems);
        },
        updateSelectedItems() {
            this.selectedItems = this.selected.map(id => this.findItemById(id).label);
        },
        normalizer(node) {
            return {
                id: node.id,
                label: node.label,
                children: node.children
            }
        },
        findItemById(id) {
            const findInTree = items => {
                for (let item of items) {
                    if (item.id === id) return item;
                    if (item.children) {
                        const found = findInTree(item.children);
                        if (found) return found;
                    }
                }
                return null;
            };
            return findInTree(this.data);
        }
    }
};
</script>

<style>
.button-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}

.custom-modal .modal-dialog {
    max-width: 800px;
}

.custom-modal .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.treeselect-container {
    width: 100%;
}
</style>
